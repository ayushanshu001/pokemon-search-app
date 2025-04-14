export default function Breadcrumb({ path }) {
    return (
      <nav className="text-sm text-gray-500 mb-4">
        {path.map((p, i) => (
          <span key={i} className="capitalize">
            {i !== 0 && ' / '}{p}
          </span>
        ))}
      </nav>
    );
  }
  