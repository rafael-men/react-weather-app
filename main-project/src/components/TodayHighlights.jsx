
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompressIcon from '@mui/icons-material/Compress';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import HighlightBox from "./HighlightBox";

const TodayHighlights = ({ weatherData, cityImage }) => {
  const { main, wind, visibility, sys } = weatherData;

 

  const highlights = [
    { title: "Umidade", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    {
      title: "Pressão",
      value: `${main.pressure} hPa`,
      Icon: CompressIcon,
    },
    {
      title: "Visibilidade",
      value: `${visibility / 1000} km`,
      Icon:  VisibilityIcon,
    },
    {
      title: "Sensação",
      value: `${main.feels_like}°C`,
      Icon: DeviceThermostatIcon,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#4B5563",
        color: "white",
        width: "840px",
        borderRadius: "0.5rem",
        padding: "30px",
      }}
    >

        <div
          style={{
            backgroundColor: "#374151",
            color: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginTop: "11px",
            width: "385px",
          }}
        >
          <div style={{ fontSize: "22px", }}>
            <p style={{textAlign:"center"}}>Nascer do Sol e Pôr do sol</p>
            <div style={{ display: "flex", justifyContent: "space-between" ,padding:'10px'}}>
              <div>
                <WbSunnyIcon style={{ fontSize: "40px",marginLeft:'30px' }} />
                <p style={{ fontSize: "25px",marginLeft:'20px' }} >{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div>
                <NightsStayIcon style={{ fontSize: "40px",marginRight:'35px' }} />
                <p style={{ fontSize: "25px",marginRight:'50px' }} >{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div
        style={{
          display: "flex",
          gap: "4px",
          marginTop: "10px",
        }}
      >
        {highlights.map((highlight, index) => (
          <HighlightBox
            key={index}
            title={highlight.title}
            value={highlight.value}
            Icon={highlight.Icon}
          />
        ))}
      </div>
      </div>
  );
};

export default TodayHighlights;