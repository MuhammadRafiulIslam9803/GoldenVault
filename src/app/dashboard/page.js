// app/dashboard/page.js
"use client"
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/product">Module 1</Link>
          </li>
          <li>
            <Link href="/dashboard/inventory">Module 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
