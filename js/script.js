import initAnimacaoScroll from "./modules/accordion.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initModal from "./modules/modal.js";
import initAccordion from "./modules/scroll-animacao.js";
import initScrollSuave from "./modules/scroll-suave.js";
import initTabNav from "./modules/tabnav.js";
import initTooltip from "./modules/tooltip.js";
import SlideNav from "./modules/slide.js";

initAccordion();
initScrollSuave();
initAnimacaoScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
