-- Allow deleting an order and remove its invoice lines with it.
-- Supersedes 20261026_invoice_items_order_fk_restrict.sql. Deleting an order
-- also deletes its invoice_items rows, which changes the affected invoice totals.
ALTER TABLE public.invoice_items
  DROP CONSTRAINT IF EXISTS invoice_items_order_id_fkey;

ALTER TABLE public.invoice_items
  ADD CONSTRAINT invoice_items_order_id_fkey
  FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;
