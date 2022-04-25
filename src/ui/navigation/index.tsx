import { useRouter } from "next/router";
import * as React from "react";
import { INavigationItem } from "../../configs/navigation";

interface INavigationComponent {
  items: INavigationItem[];
}

export const Navigation: React.FC<INavigationComponent> = ({ items }) => {
  const router = useRouter();
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button type="button" onClick={() => router.push(item.url)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
