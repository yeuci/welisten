import { Icons } from "@/components/icons";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "../transform.css";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    invoice: "1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "2",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "3",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "4",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "5",
    paymentStatus: "6",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "7",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "8",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
interface UserProps {}

async function sleep(milliSeconds: number) {
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds); // hog cpu until time's up
  return 1;
}

export default async function User({}: UserProps) {
  const user = { artist: true };

  if (user.artist) {
    return (
      <div className="flex flex-col">
        <div
          style={{
            backgroundImage:
              "url(https://i.scdn.co/image/ab67618600001016d9625fc599fbf03c3e469690)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 11%",
          }}
          className="h-[400px] w-full p-14 flex items-end"
        >
          <div className="flex flex-col gap-5">
            <span className="text-white flex items-center gap-2">
              <Icons.verified className="h-5 w-5 text-white" fill="#3D91F4" />
              Verified Artist
            </span>
            <h1 className="font-heading select-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
              Juice WRLD
            </h1>
          </div>
        </div>
        <div className="flex-1 w-full p-14">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            Tracks
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>Cover</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Length</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow className="table-hover" key={invoice.invoice}>
                  <TableCell className="h-full font-medium items-center flex justify-start mt-3">
                    <Icons.play
                      className="hidden svg w-5 h-5 cursor-pointer"
                      fill="#000"
                    />
                    <span className="span">{invoice.invoice}</span>
                  </TableCell>
                  <TableCell>
                    <div
                      style={{
                        backgroundImage:
                          "url(https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png)",
                      }}
                      className="w-[40px] h-[40px] bg-center bg-cover"
                    />
                  </TableCell>
                  <TableCell>Golden Hour</TableCell>
                  <TableCell className="text-right">3:15</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="p-[5rem] flex items-center gap-10 bg-slate-50 flex-wrap">
        <div
          style={{
            backgroundImage:
              "url(https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png)",
          }}
          className="w-[250px] h-[250px] rounded-full bg-center bg-cover"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-heading select-none text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            MOSH
          </h1>
          <span className="flex items-center gap-2">
            <Icons.user />
            Joined December 10th
          </span>
          <span>I&apos;m here to make friends and get to know people</span>
        </div>
        <div className="ml-auto">
          <Button>Add Friend</Button>
        </div>
      </div>
      <section className="m-[5rem] mt-[3rem]">
        <div className="w-[250px] p-5">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold">Friends</h3>
            <span>120</span>
          </div>
          <div className="flex flex-col">
            <div className="p-3 pl-0 flex items-center gap-2">
              <div
                style={{
                  backgroundImage:
                    "url(https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png)",
                }}
                className="bg-cover bg-center bg-no-repeat h-[40px] w-[40px]"
              ></div>
              <Link href={"play/user"}>Friend 1</Link>
            </div>
            <div className="p-3 pl-0 flex items-center gap-2">
              <div
                style={{
                  backgroundImage:
                    "url(https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png)",
                }}
                className="bg-cover bg-center bg-no-repeat h-[40px] w-[40px]"
              ></div>
              <Link href={"play/user"}>Friend 1</Link>
            </div>
            <div className="p-3 pl-0 flex items-center gap-2">
              <div
                style={{
                  backgroundImage:
                    "url(https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png)",
                }}
                className="bg-cover bg-center bg-no-repeat h-[40px] w-[40px]"
              ></div>
              <Link href={"play/user"}>Friend 1</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
