import Head from "next/head";
import BaseTemplate from "../components/BaseTemplate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dropzone from "../components/Dropzone";
import Item from "../components/Item";
import ItemContainer from "../components/ItemContainer";
import { getAuthCookie } from "../utils/auth-cookies";
import CustomDragLayer from "../components/CustomDragLayer";
import useSWR from "swr";
import { accountId, accountKey } from "../utils/hedera-treasury";
export default function Home({ token }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);
  return (
    <>
      <Head>
        <title>DRGZ | Home</title>
      </Head>
      <DndProvider backend={HTML5Backend}>
        <CustomDragLayer />
        <BaseTemplate>
          <div className="flex-1 flex flex-col pt-1">
            {/* <div className="flex align-items-center justify-between w-full p-2">
          <div className="flex items-center text-black font-bold text-3xl px-2">
          Buying and selling is now zero effort
          </div>
          <div className="w-1/4">
          <Dropzone />
          </div>
        </div> */}
            <div className="flex justify-end p-2 pt-6 pr-4 border-b-2">
              <div className="flex">
                <button
                  data-tip="Coming soon!"
                  className="flex-1 flex bg-green-100 hover:bg-green-200 rounded-md font-bold p-2 focus:shadow-outline"
                >
                  <span className="text-green-900 ">+ Create New Listing</span>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-scroll -mb-2">
              <ItemContainer>
                <Item
                  user={user}
                  subtitle="Adidas"
                  name="Yeezys"
                  price="90.32"
                  imgPath="/boosts.webp"
                />
                <Item
                  user={user}
                  subtitle="Nike"
                  name="Red"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="Adidas"
                  name="Hype"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="Adidas"
                  name="RBW"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="Picture"
                  name="Ocean"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1467951591042-f388365db261?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="Fiction"
                  name="The Tent"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1531072901881-d644216d4bf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                />
                <Item
                  user={user}
                  subtitle="Self-improvement"
                  name="The Little Book of Hygge"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="Fantasy"
                  name="Bronze Dragon Codex"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                />
                <Item
                  user={user}
                  subtitle="Make words!"
                  name="Scrabble"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1591635566278-10dca0ca76ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="Don't tip the tower!"
                  name="Jenga"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1489850846882-35ef10a4b480?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
                />
                <Item
                  user={user}
                  subtitle="Go to war!"
                  name="Strategy"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1611891487122-207579d67d98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <Item
                  user={user}
                  subtitle="You win this game!"
                  name="Domino"
                  price="90.32"
                  imgPath="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
              </ItemContainer>
            </div>
          </div>
        </BaseTemplate>
      </DndProvider>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}
