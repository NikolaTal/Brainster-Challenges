import React, { useState, useEffect } from "react";

interface FiltersProps {
  selectedBikes: string[];
  selectedFilter: (filters: string[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedBikes, selectedFilter }) => {
  const [data, setData] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);

  useEffect(() => {
    const calculateGenderCounts = () => {
      if (data) {
        const maleCount = data.filter(
          (item: any) => item.gender === "MALE"
        ).length;
        const femaleCount = data.filter(
          (item: any) => item.gender === "FEMALE"
        ).length;
        const totalItemCount = data.length;

        setMaleCount(maleCount);
        setFemaleCount(femaleCount);
        setTotalItemCount(totalItemCount);
      }
    };

    calculateGenderCounts();
  }, [data]);

  const handleFilterClick = (bikeItem: string) => {
    if (bikeItem === "Show All") {
      selectedFilter(["Show All"]);
    } else if (bikeCategories[1].items.includes(bikeItem)) {
      selectedFilter([bikeItem]);
    } else {
      const filteredBrandFilters = selectedBikes.includes("Show All")
        ? [bikeItem]
        : [bikeItem];
      selectedFilter(filteredBrandFilters);
    }
  };

  const bikeCategories = [
    { type: "Filter by:", items: ["Show All"] },
    { type: "Gender", items: ["Male", "Female"] },
    {
      type: "Brand",
      items: [
        "LE GRAND BIKES",
        "KROSS",
        "EXPLORER",
        "VISITOR",
        "PONY",
        "FORCE",
        "E-BIKES",
        "IDEAL",
      ],
    },
  ];

  return (
    <div className="pt-4">
      <h1 className="bikes">Bikes</h1>
      {bikeCategories.map((type, index) => (
        <div key={type.type}>
          <p className={type.type === "Filter by:" ? "filteredFont" : "titles"}>
            {type.type}
          </p>

          {type.items.map((bike) => (
            <div key={bike} className="buttonContainer">
              <button
                className={
                  type.type === "Brand"
                    ? data.filter(
                        (item: any) =>
                          item.brand === bike && selectedBikes.includes(bike)
                      ).length > 0
                      ? "activeButton"
                      : "btn-bike"
                    : type.type === "Gender" || type.type === "Filter by"
                    ? data.filter(
                        (item: any) =>
                          (bike === "Male" || bike === "Female") &&
                          selectedBikes.includes(bike)
                      ).length > 0
                      ? "activeButton"
                      : "btn-gender"
                    : bike === "Show All" && selectedBikes.includes(bike)
                    ? "activeButton"
                    : "btn-gender"
                }
                onClick={() => handleFilterClick(bike)}
              >
                {bike}
              </button>

              <span className={"numberOfBikes"}>
                {type.type === "Filter by:" && (
                  <span
                    className={`quantity ${
                      data.filter(
                        (item: any) =>
                          (bike === "Show All" ? true : item.brand === bike) &&
                          selectedBikes.includes(bike)
                      ).length > 0
                        ? "active"
                        : ""
                    }`}
                  >
                    {bike === "Show All" ? ` ${totalItemCount}` : ""}
                  </span>
                )}
                {type.type === "Gender" && (
                  <span
                    className={`quantity ${
                      data.filter(
                        (item: any) =>
                          (bike === "Male" || bike === "Female"
                            ? true
                            : (item.gender = bike)) &&
                          selectedBikes.includes(bike)
                      ).length > 0
                        ? "active"
                        : ""
                    }`}
                  >
                    {bike === "Male" ? ` ${maleCount}` : ` ${femaleCount}`}
                  </span>
                )}
                {type.type === "Brand" && (
                  <span
                    className={`quantity ${
                      data.filter(
                        (item: any) =>
                          item.brand === bike && selectedBikes.includes(bike)
                      ).length > 0
                        ? "active"
                        : ""
                    }`}
                  >
                    {data &&
                      data.filter((item: any) => item.brand === bike).length}
                  </span>
                )}
              </span>
            </div>
          ))}
          {index < 2 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default Filters;
