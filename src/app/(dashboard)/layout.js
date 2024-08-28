import { Plus_Jakarta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global-admin.css";
import { CProviders } from "../CProvider";
import AuthContextProvider from "@/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { SidebarProvider } from "@/context/SidebarContext";
import BaseLayout from "@/components/admin-components/general-components/core-components/BaseLayout";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <CProviders>
          <AuthContextProvider>
            <SidebarProvider>
              <BaseLayout>{children}</BaseLayout>
            </SidebarProvider>
          </AuthContextProvider>
        </CProviders>
      </body>
    </html>
  );
}
