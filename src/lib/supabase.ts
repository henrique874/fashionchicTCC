import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseAnonKey = 'your-anon-key';

// These will be replaced with actual values when Supabase is properly connected
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      cart_items: {
        Row: {
          id: string;
          user_id: string;
          product_id: number;
          product_name: string;
          product_price: number;
          product_image: string;
          quantity: number;
          size: string;
          color: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          product_id: number;
          product_name: string;
          product_price: number;
          product_image: string;
          quantity: number;
          size: string;
          color: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          product_id?: number;
          product_name?: string;
          product_price?: number;
          product_image?: string;
          quantity?: number;
          size?: string;
          color?: string;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          total: number;
          status: string;
          payment_method: string;
          payment_id: string | null;
          shipping_address: any;
          items: any;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          total: number;
          status: string;
          payment_method: string;
          payment_id?: string | null;
          shipping_address: any;
          items: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          total?: number;
          status?: string;
          payment_method?: string;
          payment_id?: string | null;
          shipping_address?: any;
          items?: any;
          created_at?: string;
        };
      };
    };
  };
};