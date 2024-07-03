import { Layout } from "@root/modules/app/react/Layout";
import { AppWrapper } from "@root/modules/app/react/AppWrapper";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Ratatouille",
  description: "Réservation de tables de restaurant",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppWrapper>
            <Layout>{children}</Layout>
          </AppWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}