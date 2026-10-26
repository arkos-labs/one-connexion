-- Prevent deleting orders that have been invoiced.
-- invoice_items.order_id was ON DELETE SET NULL, which violates the one_reference
-- check (exactly one of order_id / navette_execution_id must be set) and would
-- otherwise silently alter invoices. RESTRICT blocks the delete instead; cancel
-- the order (status 'annulee') rather than deleting it.
ALTER TABLE public.invoice_items
  DROP CONSTRAINT IF EXISTS invoice_items_order_id_fkey;

ALTER TABLE public.invoice_items
  ADD CONSTRAINT invoice_items_order_id_fkey
  FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE RESTRICT;
