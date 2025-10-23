import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  async create(payload) {
    const { data, error } = await supabase.from('items').insert([payload]).select();
    if (error) throw error;
    return data[0];
  },

  async getAll({ status, limit, offset } = {}) {
    let query = supabase.from('items').select('*').order('tanggal_masuk', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }
    if (limit) {
      query = query.range(offset ?? 0, (offset ?? 0) + limit - 1);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from('items').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase.from('items').update(payload).eq('id', id).select();
    if (error) throw error;
    return data[0];
  },

  async remove(id) {
    const { data, error } = await supabase.from('items').delete().eq('id', id).select();
    if (error) throw error;
    return data[0];
  },

  async countAll() {
    const { count, error } = await supabase.from('items').select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count;
  }
};