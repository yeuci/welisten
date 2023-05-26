"use client";

import AccountTabs from "@/components/account-tabs";
import { useSession } from "next-auth/react";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import { getInitials } from "@/lib/utils";
import "./normalize.css";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      <section className="m-5">
        <h3 className="text-center mb-5 scroll-m-20 text-2xl font-semibold tracking-tight">
          Settings
        </h3>
        <div className="flex items-center gap-5 justify-center flex-wrap">
          <div
            style={{ backgroundImage: `url(${session?.user?.image})` }}
            className="hover-main relative bg-[#F1F5F9] transition w-[150px] h-[150px] rounded-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
          >
            {!session?.user?.image && (
              <div>
                <span>{getInitials(session?.user?.email || "")}</span>
              </div>
            )}

            <div className="hidden transition hover-icon w-9 h-9 bg-white rounded-full items-center justify-center absolute top-50 left-50">
              <Icons.imageplus className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <AccountTabs />
        </div>
        <div className="mt-10 flex items-center gap-5 justify-center">
          <Textarea className="w-[650px]" placeholder="Description" />
        </div>
      </section>
    </div>
  );
}
