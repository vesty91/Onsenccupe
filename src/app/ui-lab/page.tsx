import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/reui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "UI Lab",
  robots: { index: false, follow: false },
};

/** Page de validation de l’écosystème UI — non liée au menu public */
export default function UiLabPage() {
  return (
    <div className="min-h-screen bg-surface pb-24">
      <section className="relative overflow-hidden border-b bg-brand-dark px-4 py-16 text-white">
        <BackgroundBeams className="opacity-70" />
        <div className="container-site relative z-10">
          <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
            /ui-lab · noindex
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            UI Ecosystem Lab
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Validation shadcn/ui, Magic UI, Aceternity UI et ReUI. Le site
            vitrine Onsenccupe n’est pas modifié par cette page.
          </p>
        </div>
      </section>

      <div className="container-site space-y-10 py-12">
        <Alert>
          <Info />
          <AlertTitle>ReUI (adapté TW3)</AlertTitle>
          <AlertDescription>
            Les items ReUI récents ciblent souvent Tailwind v4. Ce composant est
            une adaptation compatible du projet actuel (TW 3.4).
          </AlertDescription>
        </Alert>

        <Card className="relative overflow-hidden">
          <BorderBeam duration={8} />
          <CardHeader>
            <CardTitle>shadcn/ui — primitives</CardTitle>
            <CardDescription>
              Button, Input, Badge, Dialog, Tabs, Dropdown, Table, Tooltip
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>

            <div className="grid max-w-md gap-2">
              <Label htmlFor="demo-email">Email</Label>
              <Input id="demo-email" type="email" placeholder="vous@email.fr" />
            </div>

            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Ouvrir Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog shadcn</DialogTitle>
                    <DialogDescription>
                      Primitive Radix + styles shadcn new-york.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Dropdown</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profil</DropdownMenuItem>
                  <DropdownMenuItem>Facturation</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary">Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>Tooltip shadcn</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Tabs defaultValue="a" className="max-w-lg">
              <TabsList>
                <TabsTrigger value="a">Onglet A</TabsTrigger>
                <TabsTrigger value="b">Onglet B</TabsTrigger>
              </TabsList>
              <TabsContent value="a">Contenu A</TabsContent>
              <TabsContent value="b">Contenu B</TabsContent>
            </Tabs>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead>Rôle</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>shadcn/ui</TableCell>
                  <TableCell>Primitives</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Magic UI</TableCell>
                  <TableCell>Motion / effects</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aceternity</TableCell>
                  <TableCell>Visuels avancés</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Separator />

        <div>
          <h2 className="mb-4 font-display text-2xl font-bold text-brand">
            Magic UI — Marquee
          </h2>
          <div className="relative overflow-hidden rounded-xl border bg-white">
            <Marquee pauseOnHover className="[--duration:30s]">
              {["Débarras", "Nettoyage", "Extérieur", "Coups de main"].map(
                (label) => (
                  <div
                    key={label}
                    className="mx-2 rounded-lg border bg-surface px-4 py-2 text-sm font-medium text-brand"
                  >
                    {label}
                  </div>
                )
              )}
            </Marquee>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Architecture</CardTitle>
            <CardDescription>
              Voir docs/UI-ECOSYSTEM.md pour le workflow complet.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Marketing : <code>@/components/Button</code> (existant)
              </li>
              <li>
                Primitives : <code>@/components/ui/*</code>
              </li>
              <li>
                Effects site : <code>@/components/magic/*</code>
              </li>
              <li>
                ReUI : <code>@/components/reui/*</code>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
