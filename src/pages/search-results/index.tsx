import type { NextPage } from "next";
import { CardsComponent } from "../../ui/cards";
import { FiltersPanelComponent } from "../../ui/filters-panel";

import { MasterLayoutComponent } from "../../ui/master-layout";

const SearchResults: NextPage = () => {
  return (
    <MasterLayoutComponent>
      <div className="flex items-stretch">
        <aside className="w-72">
          <FiltersPanelComponent />
        </aside>
        <section className="flex-1">
          <CardsComponent />
          <CardsComponent />
          <CardsComponent />
          <CardsComponent />
        </section>
      </div>
    </MasterLayoutComponent>
  );
};

export default SearchResults;
