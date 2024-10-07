type ObjectViewerProps = {
  data?: { [key: string]: any };
  indentLevel?: number;
};

const ObjectViewer: React.FC<ObjectViewerProps> = ({
  data,
  indentLevel = 0,
}) => {
  const indent = Array(indentLevel).fill(" ").join(""); // Indentation string

  if (!data) {
    return <div>{indent}undefined</div>;
  }

  return (
    <div style={{ whiteSpace: "pre" }}>
      {Object.keys(data).map((key) => {
        const value = data[key];

        // If value is an object, recursively render it with increased indentation
        if (typeof value === "object" && value !== null) {
          return (
            <div key={key}>
              {indent}
              {key}: &#123;
              <ObjectViewer data={value} indentLevel={indentLevel + 2} />
              {indent}&#125;
            </div>
          );
        }

        // Primitive values (string, number, boolean, etc.)
        return (
          <div key={key}>
            {indent}
            {key}: {JSON.stringify(value)}
          </div>
        );
      })}
    </div>
  );
};

export default ObjectViewer;
