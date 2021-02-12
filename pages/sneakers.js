import Head from "next/head";
import BaseTemplate from "../components/BaseTemplate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dropzone from "../components/Dropzone";
import Item from "../components/Item";
import ItemContainer from "../components/ItemContainer";
import { getAuthCookie } from "../utils/auth-cookies";
import useSWR from "swr";

export default function Sneakers({ token }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);
  return (
    <DndProvider backend={HTML5Backend}>
      <BaseTemplate>
        <div className="flex-1 flex flex-col">
          {/* <div className="flex align-items-center justify-between w-full p-2">
          <div className="flex items-center text-black font-bold text-3xl px-2">
          Buying and selling is now zero effort
          </div>
          <div className="w-1/4">
          <Dropzone />
          </div>
        </div> */}
          <div className="flex-1 overflow-y-scroll">
            <ItemContainer>
              <Item
                subtitle="Adidas"
                name="Yeezys"
                price="90.32"
                imgPath="/boosts.webp"
              />
              <Item
                subtitle="Nike"
                name="Red"
                price="90.32"
                imgPath="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              />
              <Item
                subtitle="Adidas"
                name="Hype"
                price="90.32"
                imgPath="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              />
              <Item
                subtitle="Adidas"
                name="RBW"
                price="90.32"
                imgPath="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </ItemContainer>
          </div>
        </div>
      </BaseTemplate>
    </DndProvider>
  );
}

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}
