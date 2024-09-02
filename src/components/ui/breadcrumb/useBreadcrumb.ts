import { LinkProps } from "src/components/ui/link";
import { create } from "zustand";

export type BreadcrumbStore = {
  components: LinkProps[];
  setComponents: (components: LinkProps[]) => void;
};

export const useBreadcrumb = create<BreadcrumbStore>((set) => ({
  components: [],
  setComponents: (components) => set({ components }),
}));
