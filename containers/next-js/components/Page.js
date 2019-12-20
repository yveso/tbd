import Meta from "./Meta";
import Header from "./Header";

function Page({ children }) {
  return (
    <div>
      <Meta />
      <Header />
      {children}
    </div>
  );
}

export default Page;
