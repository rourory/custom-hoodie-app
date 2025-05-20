import { create } from "zustand";

export interface CanvasCustomizerStoreState {
  selectedImageId: number | null;
  setSelectedImageId: (id: number | null) => void;
  images: CanvasImage[];
  addImage: (file: File | undefined, editorContext: string) => void;
  deleteSelectedImage: () => void;
  updateImagePosition: (id: number, x: number, y: number) => void;
  updateImageScale: (id: number, scaleX: number, scaleY: number) => void;
  updateImageRotation: (id: number, rotation: number) => void;
}

export const useCanvasCustomizerStore = create<CanvasCustomizerStoreState>()(
  (set, getState) => ({
    images: [],
    selectedImageId: null,
    setSelectedImageId: (id: number | null) =>
      set((state) => {
        state.selectedImageId = id;
        return state;
      }),
    addImage: (file, editorContext) => {
      if (!file) return;
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const id = Date.now();
        set({
          images: [
            ...getState().images,
            {
              id,
              image: img,
              x: 50,
              y: 50,
              scaleX: 1,
              scaleY: 1,
              rotation: 0,
              context: editorContext,
            },
          ],
        });
      };
    },
    deleteSelectedImage: () =>
      set({
        images: getState().images.filter(
          (image) => image.id !== getState().selectedImageId
        ),
      }),
    updateImagePosition: (id, x, y) => {
      set({
        images: getState().images.map((image) => {
          if (image.id === id) {
            return { ...image, x, y };
          }
          return image;
        }),
      });
    },
    updateImageScale: (id, scaleX, scaleY) => {
      set({
        images: getState().images.map((image) => {
          if (image.id === id) {
            return { ...image, scaleX, scaleY };
          }
          return image;
        }),
      });
    },
    updateImageRotation(id, rotation) {
      set({
        images: getState().images.map((image) => {
          if (image.id === id) {
            return { ...image, rotation };
          }
          return image;
        }),
      });
    },
  })
);

export interface ModelSettingsStore {
  color: string;
  setColor: (color: string) => void;
  image?: HTMLImageElement;
  setImage: (image?: HTMLImageElement) => void;
}

export const useModelSettingsStore = create<ModelSettingsStore>()((set) => ({
  color: "white",
  setColor: (color) => set({ color }),
  image: undefined,
  setImage: (image) => set({ image }),
}));
