CREATE TABLE "membership_applications" (
	"id" serial PRIMARY KEY,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"distance" text,
	"consent" boolean NOT NULL,
	"status" text DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rsvps" (
	"id" serial PRIMARY KEY,
	"run_date" date NOT NULL,
	"name" text NOT NULL,
	"distance" text NOT NULL,
	"device_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "rsvps_run_device_idx" ON "rsvps" ("run_date","device_id");--> statement-breakpoint
CREATE INDEX "rsvps_run_date_idx" ON "rsvps" ("run_date");