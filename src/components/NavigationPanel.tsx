import { type NavItem, NavigationData } from "./NavigationData";

type Props = {
  selectedKey: string;
  onSelect: (key: string) => void;
};

export default function NavigationPanel({ selectedKey, onSelect }: Props) {
  const renderItems = (items: NavItem[]) => (
    <ul className="nav-list">
      {items.map((item) => (
        <li key={item.key}>
          <div
            className={`nav-item${selectedKey === item.key ? " selected" : ""}`}
            onClick={() => onSelect(item.key)}
          >
            {item.label}
          </div>
          {item.children && renderItems(item.children)}
        </li>
      ))}
    </ul>
  );

  return <nav className="navigation-panel">{renderItems(NavigationData)}</nav>;
}
