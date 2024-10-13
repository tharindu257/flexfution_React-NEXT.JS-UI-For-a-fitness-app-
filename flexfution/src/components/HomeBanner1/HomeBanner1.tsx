import React from 'react';
import { CircularProgress } from '@mui/joy'; // Ensure this import is correct
import { AiOutlineEye } from 'react-icons/ai'
import './HomeBanner1.css';

const HomeBanner1 = () => {
  const [data, setData] = React.useState<any>(null);

  const getData = async () => {
    const temp = [
      {
        "name": "Calorie Intake",
        "value": 2000,
        "unit": "Kcal",
        "goal": 2500,
        "goalUnit": "Kcal"
      },
      {
        "name": "Protein Intake",
        "value": 150,
        "unit": "g",
        "goal": 200,
        "goalUnit": "g"
      },
      {
        "name": "Carbohydrate Intake",
        "value": 250,
        "unit": "g",
        "goal": 300,
        "goalUnit": "g"
      },
      {
        "name": "Fat Intake",
        "value": 70,
        "unit": "g",
        "goal": 80,
        "goalUnit": "g"
      },
      {
        "name": "Fiber Intake",
        "value": 25,
        "unit": "g",
        "goal": 30,
        "goalUnit": "g"
      },
      {
        "name": "Water Intake",
        "value": 2.5,
        "unit": "L",
        "goal": 3.0,
        "goalUnit": "L"
      }
    ];

    setData(temp);
  };

  React.useEffect(() => {
    getData();
  }, []);

  function simplifyFraction(numerator: number, denominator: number): [number, number] {
    function gcd(a: number, b: number): number {
      return b === 0 ? a : gcd(b, a % b);
    }
    const commonDivisor: number = gcd(numerator, denominator);

    // Simplify the fraction
    const simplifiedNumerator: number = numerator / commonDivisor;
    const simplifiedDenominator: number = denominator / commonDivisor;

    return [simplifiedNumerator, simplifiedDenominator];
  }

  return (
    <div className='meters'>
      {data?.length > 0 && data.map((item: any, index: number) => (
          <div className='card' key={index}>
            <div className='card-header'>
              <div className='card-header-box'>
                <div className='card-header-box-name'>{item.name}</div>
                <div className='card-header-box-value'>{item.value} {item.unit}</div>
              </div>
              <div className='card-header-box'>
                <div className='card-header-box-name'>Target</div>
                <div className='card-header-box-value'>{item.goal} {item.goalUnit}</div>
              </div>
            </div>
            <CircularProgress
              color="neutral"
              determinate
              variant="solid"
              size="lg" // Ensure this is a valid size for your version of MUI Joy
              value={(item.value / item.goal) * 100}
            >
              <span className='textincircle'>
                {simplifyFraction(item.value, item.goal)[0]} / {simplifyFraction(item.value, item.goal)[1]}
              </span>
            </CircularProgress>
            <button>Show Report <AiOutlineEye /></button>
          </div>
      ))}
    </div>
  );
};

export default HomeBanner1;
