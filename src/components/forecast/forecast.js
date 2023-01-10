import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
function Forecast({ data }) {
  return (
    <>
      <label className="title">3-Hours</label>
      <Accordion allowZeroExpanded>
        {data.list.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="item">
                    <img
                      className="icon-small"
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="weather"
                    />
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="temp">{item.main.temp}°C</label>
                    <label className="time">{item.dt_txt}</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Visibility: </label>
                    <label>{item.visibility}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hpa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea_level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels_like</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default Forecast;
