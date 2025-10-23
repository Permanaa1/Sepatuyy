import { ItemModel } from "../models/itemModel.js";

function toNullIfDash(value) {
  if (value === undefined) return undefined;
  if (value === "-" || value === "" ) return null;
  return value;
}

export const ItemController = {
  async create(req, res) {
    try {
      const body = req.body || {};

      // validasi minimal: nama dan tanggalMasuk wajib menurut skema awal
      if (!body.nama) return res.status(400).json({ error: "Field nama is required" });
      if (!body.tanggalMasuk) return res.status(400).json({ error: "Field tanggalMasuk is required" });

      // mapping camelCase -> snake_case dan ubah "-" jadi null untuk tanggalSelesai
      const payload = {
        customer_name: body.customer_name ?? null, // optional
        nama: body.nama,
        status: body.status ?? "Sedang Dicuci",
        tanggal_masuk: body.tanggalMasuk,
        tanggal_selesai: toNullIfDash(body.tanggalSelesai)
      };

      await ItemModel.create(payload);

      // sesuai contoh response — hanya pesan singkat
      return res.status(201).json({ message: "Data sepatu berhasil ditambahkan." });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const { status, page, limit } = req.query;
      const pageNum = Math.max(parseInt(page || "1"), 1);
      const lim = Math.max(parseInt(limit || "20"), 1);
      const offset = (pageNum - 1) * lim;

      const items = await ItemModel.getAll({ status, limit: lim, offset });
      return res.json(items);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      const item = await ItemModel.getById(id);
      if (!item) return res.status(404).json({ error: "Item not found" });
      return res.json(item);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const body = req.body || {};

      // hanya izinkan field yang relevan untuk update
      const updates = {};
      if (body.nama !== undefined) updates.nama = body.nama;
      if (body.status !== undefined) updates.status = body.status;
      if (body.tanggalMasuk !== undefined) updates.tanggal_masuk = body.tanggalMasuk;
      if (body.tanggalSelesai !== undefined) updates.tanggal_selesai = toNullIfDash(body.tanggalSelesai);

      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: "No valid fields to update" });
      }

      await ItemModel.update(id, updates);

      // sesuai contoh response — hanya pesan singkat
      return res.json({ message: "Status sepatu berhasil diperbarui." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const id = req.params.id;
      await ItemModel.remove(id);
      return res.json({ message: "Data sepatu berhasil dihapus." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async count(req, res) {
    try {
      const total = await ItemModel.countAll();
      return res.json({ total });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};
