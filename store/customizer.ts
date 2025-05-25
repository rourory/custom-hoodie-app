import { create } from "zustand";

export interface CanvasCustomizerStoreState {
  selectedObjectId: number | null;
  selectedObjectType: string | null;
  setSelectedObjectId: (id: number | null, type: string | null) => void;
  objects: Array<DraggableCanvasObject>;
  addImage: (file: File | undefined) => void;
  addText: (text: string) => void;
  changeSelectedTextColor: (color: string) => void;
  changeSelectedTextFontFamily: (fontFamily: string) => void;
  deleteSelectedObject: () => void;
  updateObjectDimentions: (
    id: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    rotation: number
  ) => void;
}

export const useCanvasCustomizerStore = create<CanvasCustomizerStoreState>()(
  (set, getState) => ({
    objects: [],
    selectedObjectId: null,
    selectedObjectType: null,
    setSelectedObjectId: (id, type) =>
      set({ selectedObjectId: id, selectedObjectType: type }),
    addImage: (file) => {
      if (!file) return;
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const id = Date.now();
        set({
          objects: [
            ...getState().objects,
            {
              id,
              image: img,
              x: 50,
              y: 50,
              scaleX: 1,
              scaleY: 1,
              rotation: 0,
              type: "image",
            },
          ],
        });
      };
    },
    addText: (text) => {
      const id = Date.now();
      set({
        objects: [
          ...getState().objects,
          {
            id,
            text,
            x: 50,
            y: 50,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            fontFamily: "Arial",
            fontSize: 160,
            type: "text",
            color: "black",
          },
        ],
      });
    },
    changeSelectedTextColor: (color) => {
      set({
        objects: getState().objects.map((object) => {
          if (object.id === getState().selectedObjectId) {
            return { ...object, color };
          }
          return object;
        }),
      });
    },
    changeSelectedTextFontFamily: (fontFamily) => {
      set({
        objects: getState().objects.map((object) => {
          if (object.id === getState().selectedObjectId) {
            return { ...object, fontFamily };
          }
          return object;
        }),
      });
    },
    deleteSelectedObject: () =>
      set({
        objects: getState().objects.filter(
          (image) => image.id !== getState().selectedObjectId
        ),
        selectedObjectId: null,
      }),
    updateObjectDimentions: (id, x, y, scaleX, scaleY, rotation) => {
      set({
        objects: getState().objects.map((image) => {
          if (image.id === id) {
            return { ...image, x, y, scaleX, scaleY, rotation };
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
