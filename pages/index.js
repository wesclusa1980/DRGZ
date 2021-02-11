import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dropzone from "../components/Dropzone";
import Item from "../components/Item";
import ItemContainer from "../components/ItemContainer";
import { getAuthCookie } from "../utils/auth-cookies";
import useSWR from "swr";

export default function Home({ token }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);
  return (
    <div class="flex flex-wrap bg-gray-100 w-full h-screen">
      <div class="w-2/12 bg-white rounded p-3 shadow-lg">
        <Sidebar />
      </div>

      <div class="w-10/12">
        <div class="p-4 text-gray-500">
          <DndProvider backend={HTML5Backend}>
            <Dropzone />
            <ItemContainer>
              <Item
                subtitle="Adidas"
                name="Yeezys"
                price="90.32"
                imgPath="/boosts.webp"
              />
              <Item
                subtitle="Adidas"
                name="Yeezys"
                price="90.32"
                imgPath="/boosts.webp"
              />
            </ItemContainer>
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}
