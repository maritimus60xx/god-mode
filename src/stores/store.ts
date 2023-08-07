import {writable} from "svelte/store";
import {ModalStore} from "../models/stores/ModalStore";


export const confirmModalStore = writable<ModalStore>(new ModalStore());

export const preloaderStore = writable<{visible: boolean}>({visible: false});