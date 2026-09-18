import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Zásady ochrany osobních údajů", description: "Zásady zpracování a ochrany osobních údajů společnosti SUNPOWER s.r.o.", path: "/zasady-ochrany-osobnich-udaju" });

export default function PrivacyPolicy() {
  return <><Header /><main className="subpage legal-page">
    <header className="subpage-head"><div className="container"><h1>Zásady ochrany osobních údajů</h1></div></header>
    <article className="container legal-content">
      <p>Společnost SUNPOWER s.r.o., IČO: 26025655, se sídlem Václavská 40/III, 377 01 Jindřichův Hradec („SUNPOWER s.r.o.“), provozovatel webových stránek https://www.sunpower.cz/ („webové stránky“) a poskytovatel služeb na těchto webových stránkách („služba“), prohlašuje, že nakládá s osobními údaji v souladu s platnými a účinnými právními předpisy ČR v oblasti ochrany osobních údajů.</p>
      <p>Tyto Zásady zpracovávání osobních údajů („Zásady“) stanovují, jaké osobní údaje zákazníků a třetích osob jsou sbírány při registraci a využívání služeb a jaké údaje návštěvníků webových stránek jsou sbírány při návštěvě webové stránky a jakým způsobem je s nimi dále nakládáno.</p>

      <h2>1. Osobní údaje a jejich zpracování</h2>
      <h3>1.1 Osobní údaje a účel zpracování osobních údajů</h3>
      <p>A. Osobní údaje jsou veškeré informace o identifikované a identifikovatelné osobě. Identifikovatelná fyzická osoba je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména s odkazem na určitý identifikátor (například jméno, identifikační číslo, lokační údaje, síťový identifikátor) nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.</p>
      <p>B. Za účelem prodeje zboží a služeb zákazníka a za účelem správy faktur zákazníka a komunikace se zákazníkem zpracovává SUNPOWER s.r.o. v roli správce (na základě předem uděleného souhlasu) následující kategorie osobních údajů: e-mail, telefonní číslo, fakturační údaje, fakturované částky a další údaje, které zákazník poskytuje při využívání služeb webu sunpower.cz nebo při komunikaci se SUNPOWER s.r.o. Za účelem prodeje zboží a služeb zákazníka a za účelem správy faktur zákazníka zpracovává SUNPOWER s.r.o. v roli zpracovatele následující kategorie osobních údajů:</p>
      <ul><li>fakturační údaje, fakturované částky, e-mailové adresy, případně další osobní údaje, které zákazník poskytne při využívání služeb webových stránek („osobní údaje“).</li></ul>
      <p>C. Při návštěvě webových stránek dochází i ke sběru dalších informací (blíže kapitola 3 těchto Zásad).</p>

      <h3>1.2 Třetí strany</h3>
      <p>A. Společnost SUNPOWER s.r.o. předává osobní údaje pro daný účel následujícím zpracovatelům:</p>
      <ul>
        <li>Facebook, Inc., se sídlem 1601 Willow Road, Menlo Park, CA 94025, USA (cílení reklamy),</li>
        <li>Google LLC, se sídlem 1600 Amphitheatre Parkway Mountain View, CA 94043 USA (statistické vyhodnocování, cílení reklamy, interní organizace práce),</li>
        <li>Seznam.cz a.s., se sídlem Radlická 3294/10, 150 00 Praha 5 – Smíchov (cílení reklamy),</li>
        <li>Smartsupp.com, s.r.o., se sídlem Milady Horákové 13, 602 00 Brno (zlepšování kvality služeb a zajištění funkčnosti webových stránek),</li>
        <li>případně dalším poskytovatelům zpracovatelských software, služeb a aplikací, které však v současné době SUNPOWER s.r.o. nevyužívá.</li>
      </ul>

      <h2>2. Zabezpečení osobních údajů, doba uchovávání a práva subjektů údajů</h2>
      <h3>2.1 Zabezpečení osobních údajů</h3>
      <p>A. SUNPOWER s.r.o. používá pouze zabezpečený přístup do PC a software a služby, které splňují standardní požadavky na bezpečnost dat a splňují normy stanovené Evropskou unií.</p>
      <p>B. Všichni zaměstnanci SUNPOWER s.r.o. jsou pravidelně školeni a postupují podle vnitřních předpisů týkajících se ochrany osobních údajů. Vedle technických opatření popsaných v bodě 2.1 dodržují mlčenlivost ohledně osobních údajů.</p>

      <h3>2.2 Doba uchovávání</h3>
      <p>A. Osobní údaje jsou zpracovávány a uchovávány po dobu nezbytně nutnou k zajištění práv a povinností plynoucích ze smlouvy, tedy minimálně po dobu využívání služby, a dále po dobu, po kterou je SUNPOWER s.r.o. povinna uchovávat osobní údaje podle právních předpisů nebo na kterou zákazník udělil souhlas. V ostatních případech je doba zpracování osobních údajů určena účelem zpracování.</p>

      <h3>2.3 Práva subjektů údajů</h3>
      <p>A. Mezi práva subjektů údajů, jejichž osobní údaje zpracovává SUNPOWER s.r.o., která jsou uvedena včetně dalších podrobností v Nařízení Evropského parlamentu a Rady (EU) 2016/679 („nařízení“), patří zejména tato práva:</p>
      <ul>
        <li>právo na informace a přístup ke zpracovávaným osobním údajům,</li>
        <li>právo na opravu nepřesných osobních údajů, které se týkají subjektu údajů, a dále právo na výmaz, kterému odpovídá povinnost správce zlikvidovat osobní údaje, pokud je splněna alespoň jedna z podmínek stanovených v nařízení,</li>
        <li>právo na přenositelnost osobních údajů, jehož podstatou je možnost za určitých podmínek získat poskytnuté osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu, a právo následně předat tyto údaje jinému správci; subjekt osobních údajů má právo i na to, aby správce na jeho žádost předal jeho osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu jinému správci, je-li to technicky proveditelné,</li>
        <li>právo na omezení zpracování osobních údajů a právo vznést námitku proti zpracování osobních údajů, pokud jsou zpracovávány na základě oprávněných zájmů správce nebo třetí strany,</li>
        <li>právo na odvolání souhlasu se zpracováním osobních údajů.</li>
      </ul>
      <p>B. Subjekt údajů, který má za to, že SUNPOWER s.r.o. zpracovává osobní údaje v rozporu s platnými a účinnými právními předpisy v oblasti ochrany osobních údajů, může požádat o vysvětlení nebo požadovat, aby SUNPOWER s.r.o. odstranila závadný stav. Subjekt údajů má rovněž právo obrátit se se svou žádostí na Úřad pro ochranu osobních údajů.</p>

      <h2>3. Návštěva webových stránek</h2>
      <h3>3.1 Web tracking</h3>
      <p>A. Pro zkvalitnění služeb a zajištění funkčnosti webových stránek dochází ke shromažďování a evidenci údajů, pomocí kterých je možné vyhodnocovat činnost uživatelů na webových stránkách a zpracovávat statistické výstupy. Přitom jsou všechny osobní údaje zpracovávány v anonymizované podobě.</p>
      <p>B. Za účelem zajištění maximálně uživatelsky přívětivých webových stránek a služeb využívá SUNPOWER s.r.o. rovněž služeb společnosti Facebook, Inc., se sídlem 1601 Willow Road, Menlo Park, CA 94025, USA, společnosti Smartsupp.com, s.r.o., se sídlem Milady Horákové 13, 602 00 Brno a společnosti Seznam.cz a.s., se sídlem Radlická 3294/10, 150 00 Praha 5 – Smíchov, které poskytují odpovídající technické prostředky (trackingové technologie). Tyto technologie pomáhají zjišťovat, jakým způsobem jsou využívány webové stránky a služby a jakým způsobem je možné zvýšit jednoduchost jejich používání. Dále umožňují pochopit chování zákazníka na webových stránkách za účelem snadnějšího a příjemnějšího nabízení služeb.</p>
      <p>C. Při návštěvě webových stránek jsou pomocí pixelů umístěných na webových stránkách sbírány, shromažďovány a následně vyhodnocovány potřebné údaje. Tento nástroj zajišťuje propojení webových stránek s webovým prohlížečem návštěvníka, který zasílá informace o využívání webových stránek. Popis jednotlivých nástrojů a zásady zpracování osobních údajů jsou uvedeny na těchto odkazech:</p>
      <ul>
        <li><a href="https://www.facebook.com/business/gdpr">Facebook – GDPR</a></li>
        <li><a href="https://www.smartsupp.com/cs/privacy">Smartsupp – ochrana osobních údajů</a></li>
        <li><a href="https://blog.seznam.cz/2018/03/gdpr-a-reklama-na-seznamu-2-dil-odpovedi-na-vase-otazky/">Seznam.cz – GDPR</a></li>
      </ul>

      <h3>3.2 Conversion tracking</h3>
      <p>A. Conversion tracking na webových stránkách zajišťuje sledování registrací, ke kterým došlo po rozkliknutí reklamy na webových stránkách třetího subjektu nebo na základě propojení přes link https://www.sunpower.cz/ umístěný na webových stránkách třetího subjektu. Na základě tohoto sledování (pomocí konverzních cookies) je reklama na službu přizpůsobována zákazníkům. Dalším účelem sledování je vyhodnocování, které je podkladem pro zúčtování. Součástí konverzních cookies nejsou osobní údaje.</p>

      <h3>3.3 Logovací soubory</h3>
      <p>A. Webový prohlížeč návštěvníka vysílá při každé návštěvě webových stránek informace o jeho uživatelských údajích. Datové přenosy, které se tímto způsobem ukládají do logovacích souborů, obsahují následující data: datum a čas návštěvy webových stránek, URL navštívené webové stránky, IP adresu, původní URL, z níž návštěvník na webové stránky přišel, množství přenesených dat a informaci o user agent zaslanou webovým prohlížečem návštěvníka (případně i typ a verzi prohlížeče a použitý operační systém).</p>
      <p>B. Vyhodnocení logovacích souborů slouží k odhalování chyb a jejich rychlému odstranění. Vyhodnocování také slouží k řízení kapacity serveru a přispívá ke zkvalitnění nabídky.</p>

      <h3>3.4 Cookies</h3>
      <p>A. Na webových stránkách jsou používány tyto cookies:</p>
      <ul>
        <li>technické cookies, které jsou nezbytné pro zajištění funkčnosti při využívání webových stránek,</li>
        <li>soubory cookies, jejichž ukládání je podmíněno souhlasem návštěvníka, které pomáhají zlepšovat uživatelský dojem, usnadňují prohlížení webových stránek a nabízení služeb na míru zákazníkům a umožňují statistické měření nebo vyhodnocování za účelem zúčtování.</li>
      </ul>
      <p>B. Použití takových cookies může návštěvník kdykoliv omezit nebo zablokovat v nastavení svého webového prohlížeče dle jeho libosti. Informace o nastavení konkrétního prohlížeče naleznete na těchto uvedených adresách:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/">Chrome: support.google.com</a></li>
        <li><a href="https://help.opera.com/">Opera: help.opera.com</a></li>
        <li><a href="https://support.mozilla.org/">Firefox: support.mozilla.org</a></li>
        <li><a href="https://support.microsoft.com/windows">MSIE: windows.microsoft.com</a></li>
        <li><a href="https://support.apple.com/">Safari: support.apple.com</a></li>
      </ul>
      <p>Cookies ze stránek automaticky mažeme nejpozději do 12 měsíců od jejich posledního využití.</p>
      <p>Změna cookies může mít za následek nedostupnost některých funkcí webových stránek nebo snížení uživatelského dojmu.</p>

      <h2>4. Kontakt</h2>
      <p>A. V případě jakýchkoli dotazů, připomínek a žádostí týkajících se osobních údajů nebo těchto Zásad lze kontaktovat SUNPOWER s.r.o. prostřednictvím kontaktního formuláře, e-mailové adresy <a href="mailto:info@sunpower.cz">info@sunpower.cz</a> anebo adresy uvedené níže.</p>
      <p><strong>SUNPOWER s.r.o.</strong><br />Kontaktní adresa: Jarošovská 840/II, 377 02 Jindřichův Hradec</p>
    </article>
  </main><Footer /></>;
}
