CREATE TABLE "board_members" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"role" text NOT NULL,
	"bio" text,
	"photo_key" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "race_registrations" (
	"id" serial PRIMARY KEY,
	"edition" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"birth_date" date NOT NULL,
	"gender" text NOT NULL,
	"distance" text NOT NULL,
	"city" text,
	"club" text,
	"tshirt_size" text,
	"emergency_name" text NOT NULL,
	"emergency_phone" text NOT NULL,
	"payment_method" text NOT NULL,
	"paid" boolean DEFAULT false NOT NULL,
	"bib" integer,
	"finish_time" text,
	"status" text DEFAULT 'registered' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"key" text PRIMARY KEY,
	"value" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "race_reg_edition_email_distance_idx" ON "race_registrations" ("edition","email","distance");--> statement-breakpoint
CREATE UNIQUE INDEX "race_reg_edition_bib_idx" ON "race_registrations" ("edition","bib");--> statement-breakpoint
CREATE INDEX "race_reg_edition_idx" ON "race_registrations" ("edition");