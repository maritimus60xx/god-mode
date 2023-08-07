import type {GodVariantsConstants} from "../../constants/GodVariantsConstants";

export class ModalStore {
   visible: boolean = false;
   confirm: (value: GodVariantsConstants) => void;


   public constructor(init?: Partial<ModalStore>) {
      Object.assign(this, init);
   }
}