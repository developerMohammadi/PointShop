"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
