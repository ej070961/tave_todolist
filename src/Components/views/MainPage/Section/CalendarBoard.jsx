import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs';
import * as c from '../../../../style/Calendar'
import {BsCircle, BsPlusCircleDotted} from 'react-icons/bs'

function CalendarBoard(props) {

    const [selectedDay, setSelectedDay] = useState(
        dayjs().format('MM/DD/YY')
      );

    const [arr, setArr] = useState([]);

    
    //   const handleSelectDate = (v: string) => {
    //     setSelectedDay(v);
    //   };

    const initArr = (firstDay, daysInMonth) => {
        return Array.from({length: firstDay+ daysInMonth},
            (v,i) => i<firstDay
            ? null //현재 인덱스(i)가 firstDay보다 작으면 해당 요소를 null로 설정
            : dayjs(selectedDay)
                .startOf('month')
                .set('date', i-firstDay+1)
                .format('MM/DD/YY') 
                //dayjs를 사용하여 현재 월의 첫번째 날을 기준으로 'i-firstDay+1'일자의 날짜를 계산하고, 그 날짜를 'MM/DD/YY'형식으로 포맷되어 배열에 저장됨
        );

    }

    useEffect(()=>{
        const firstDay = dayjs(selectedDay).startOf('month').day(); 
        //해당 월의 첫번째 날이 무슨 요일인지 일요일(0)부터 토요일(6)까지의 값을 반환
        const daysInMonth = dayjs(selectedDay).daysInMonth(); //해당 월의 총 일 수 반환 
        console.log(`firstDay: ${firstDay} daysInMonth: ${daysInMonth}`)
        setArr(initArr(firstDay, daysInMonth));
    },[selectedDay])

  return (
    <c.CalendarWrapper>
     <c.Header>
        <p className='yearandmonth'>{dayjs(selectedDay).year()}년 {dayjs(selectedDay).month()+1}월</p>
     </c.Header>
     <c.DayWrapper>
        <li>일</li>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
     </c.DayWrapper>
        <c.CalendarBoard>
            {arr.map((v, i) => (
                <div key={v ? v.toString() : `${v}${i}`}>
                {v && (
                    // <div className={selectedDay === v ? 'selected' : 'not-selected'} onClick={() => handleSelectDate(v)}>
                    <c.DateContainer>
                    <li>{dayjs(v).date()}</li>
                    <BsCircle className='checkbox'/>
                    </c.DateContainer>
                )}
                </div>
            ))}
        </c.CalendarBoard>
    </c.CalendarWrapper>
  )
}

export default CalendarBoard