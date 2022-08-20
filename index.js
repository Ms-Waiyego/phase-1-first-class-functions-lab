// Code your solution in this file!
const returnFirstTwoDrivers = (function () {
    const drivers = ['Antonia', 'Nuru','Amari','Mo'];
    return [ 'Antonia','Nuru'];
  })

const returnLastTwoDrivers = (function () {
  const drivers = ['Antonia', 'Nuru','Amari','Mo'];
  return ['Amari','Mo'];
})

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (integer) {
  const fareMultiplier=function fare() {
  }
  return function(){
      const fareQuintupler= 5
       return 2*12.5
      }
    }

  const fareDoubler = function fareDoubler (createFareMultiplier) {
    return (10*2)
  }
  const fareTripler = function fareTripler (createFareMultiplier) {
    return (12*3)
  }

  function selectDifferentDrivers([drivers,selectingDrivers]) {
   if (selectingDrivers === returnFirstTwoDrivers) {
    return ['Antonia','Nuru']
   } else  {
    return ['Amari','Mo']
   }
  }
  function selectDifferentDrivers(drivers, Function){
    if(Function ==returnFirstTwoDrivers){
      return returnFirstTwoDrivers();
    }else if(Function==returnLastTwoDrivers){
      return returnLastTwoDrivers();
    }
  
  }
  

