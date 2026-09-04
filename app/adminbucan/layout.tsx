import type { ReactNode } from "react";
import "./admin.css";
export const metadata = { title: "Administrace | Sunpower", robots: { index: false, follow: false } };
export default function AdminLayout({ children }: { children: ReactNode }) { return <div className="admin-shell">{children}</div>; }
