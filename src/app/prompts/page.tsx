'use client'
import ChatContainer from "@/components/Chat/ChatContainer";
import { Layout } from "@/components/Layout";
import { timeSince } from '@/utils/dateTime';

console.log(timeSince('1989-12-28', 'y M d'))

export default function Prompts() {
  return (
    // <Layout useBreadcrumbs>
      <ChatContainer />
    // </Layout>
  );
}
