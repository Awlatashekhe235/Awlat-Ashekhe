export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      complaints: {
        Row: {
          admin_response: string | null
          created_at: string | null
          id: string
          message: string
          status: string | null
          subject: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_response?: string | null
          created_at?: string | null
          id?: string
          message: string
          status?: string | null
          subject: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_response?: string | null
          created_at?: string | null
          id?: string
          message?: string
          status?: string | null
          subject?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "complaints_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      engineers: {
        Row: {
          bank_accounts: Json | null
          created_at: string | null
          currency: string | null
          email: string | null
          id: string
          is_active: boolean | null
          location: string | null
          location_link: string | null
          name: string
          name_en: string | null
          nationality: string | null
          profile_image: string | null
          rating: number | null
          reviews_count: number | null
          social_links: Json | null
          specialties: string[] | null
          whatsapp: string | null
        }
        Insert: {
          bank_accounts?: Json | null
          created_at?: string | null
          currency?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          location_link?: string | null
          name: string
          name_en?: string | null
          nationality?: string | null
          profile_image?: string | null
          rating?: number | null
          reviews_count?: number | null
          social_links?: Json | null
          specialties?: string[] | null
          whatsapp?: string | null
        }
        Update: {
          bank_accounts?: Json | null
          created_at?: string | null
          currency?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          location_link?: string | null
          name?: string
          name_en?: string | null
          nationality?: string | null
          profile_image?: string | null
          rating?: number | null
          reviews_count?: number | null
          social_links?: Json | null
          specialties?: string[] | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      games: {
        Row: {
          category: string
          created_at: string | null
          created_by: string | null
          description: string | null
          download_link: string | null
          downloads_count: number | null
          id: string
          image: string | null
          is_active: boolean | null
          name: string
          rating: number | null
          requirements: string | null
          size: string | null
          version: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          download_link?: string | null
          downloads_count?: number | null
          id?: string
          image?: string | null
          is_active?: boolean | null
          name: string
          rating?: number | null
          requirements?: string | null
          size?: string | null
          version?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          download_link?: string | null
          downloads_count?: number | null
          id?: string
          image?: string | null
          is_active?: boolean | null
          name?: string
          rating?: number | null
          requirements?: string | null
          size?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "games_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          customer_confirmation: boolean | null
          delivery_status: string | null
          id: string
          notes: string | null
          product_id: string
          quantity: number | null
          seller_id: string
          total_price: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          customer_confirmation?: boolean | null
          delivery_status?: string | null
          id?: string
          notes?: string | null
          product_id: string
          quantity?: number | null
          seller_id: string
          total_price: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          customer_confirmation?: boolean | null
          delivery_status?: string | null
          id?: string
          notes?: string | null
          product_id?: string
          quantity?: number | null
          seller_id?: string
          total_price?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          condition: string | null
          coupon: string | null
          created_at: string | null
          currency: string | null
          description: string | null
          email: string | null
          exchange_for: string | null
          id: string
          images: string[] | null
          is_featured: boolean | null
          location: string | null
          name: string
          price: number
          status: string | null
          type: string | null
          updated_at: string | null
          user_id: string
          whatsapp: string | null
        }
        Insert: {
          category: string
          condition?: string | null
          coupon?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          email?: string | null
          exchange_for?: string | null
          id?: string
          images?: string[] | null
          is_featured?: boolean | null
          location?: string | null
          name: string
          price: number
          status?: string | null
          type?: string | null
          updated_at?: string | null
          user_id: string
          whatsapp?: string | null
        }
        Update: {
          category?: string
          condition?: string | null
          coupon?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          email?: string | null
          exchange_for?: string | null
          id?: string
          images?: string[] | null
          is_featured?: boolean | null
          location?: string | null
          name?: string
          price?: number
          status?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      quran_audio: {
        Row: {
          audio_url: string
          created_at: string | null
          created_by: string | null
          duration: number | null
          file_size: string | null
          id: string
          is_active: boolean | null
          reciter_name: string
          surah_name: string
          surah_number: number
        }
        Insert: {
          audio_url: string
          created_at?: string | null
          created_by?: string | null
          duration?: number | null
          file_size?: string | null
          id?: string
          is_active?: boolean | null
          reciter_name: string
          surah_name: string
          surah_number: number
        }
        Update: {
          audio_url?: string
          created_at?: string | null
          created_by?: string | null
          duration?: number | null
          file_size?: string | null
          id?: string
          is_active?: boolean | null
          reciter_name?: string
          surah_name?: string
          surah_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "quran_audio_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          engineer_id: string | null
          id: string
          product_id: string | null
          rating: number
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          engineer_id?: string | null
          id?: string
          product_id?: string | null
          rating: number
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          engineer_id?: string | null
          id?: string
          product_id?: string | null
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_engineer_id_fkey"
            columns: ["engineer_id"]
            isOneToOne: false
            referencedRelation: "engineers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          birth_date: string | null
          city: string | null
          created_at: string | null
          first_name: string
          id: string
          last_name: string
          nationality: string | null
          phone: string | null
          profile_image: string | null
          role: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          birth_date?: string | null
          city?: string | null
          created_at?: string | null
          first_name: string
          id?: string
          last_name: string
          nationality?: string | null
          phone?: string | null
          profile_image?: string | null
          role?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          birth_date?: string | null
          city?: string | null
          created_at?: string | null
          first_name?: string
          id?: string
          last_name?: string
          nationality?: string | null
          phone?: string | null
          profile_image?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
