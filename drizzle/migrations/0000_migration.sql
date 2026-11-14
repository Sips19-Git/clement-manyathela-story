CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  organisation text,
  service text NOT NULL,
  event_date date,
  location text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.booking_requests TO anon, authenticated;
GRANT ALL ON public.booking_requests TO service_role;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a booking" ON public.booking_requests FOR INSERT TO anon, authenticated
WITH CHECK (char_length(name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 255 AND char_length(message) BETWEEN 1 AND 3000);