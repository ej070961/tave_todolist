import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs';
import * as c from '../../../../style/Calendar'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import { useSelector } from 'react-redux';


function CalendarBoard({selectedDay, setSelectedDay}) {

    const [arr, setArr] = useState([]);


    const initArr = (firstDay, daysInMonth) => {
        return Array.from({length: firstDay+ daysInMonth},
            (v,i) => i<firstDay
            ? null //현재 인덱스(i)가 firstDay보다 작으면 해당 요소를 null로 설정
            : dayjs(selectedDay)
                .startOf('month')
                .set('date', i-firstDay+1)
                .format('YYYY-MM-DD') 
                //dayjs를 사용하여 현재 월의 첫번째 날을 기준으로 'i-firstDay+1'일자의 날짜를 계산하고, 그 날짜를 'YYYY-MM-DD'형식으로 포맷되어 배열에 저장됨
        );

    }
    

    useEffect(()=>{
        const firstDay = dayjs(selectedDay).startOf('month').day(); 
        //해당 월의 첫번째 날이 무슨 요일인지 일요일(0)부터 토요일(6)까지의 값을 반환
        const daysInMonth = dayjs(selectedDay).daysInMonth(); //해당 월의 총 일 수 반환 
        setArr(initArr(firstDay, daysInMonth));

    },[selectedDay])


 
    //이 함수는 이전 달로 이동하는 동작을 처리
    const handlePrevMonth = () => {
        const newDate = dayjs(selectedDay) //현재 선택된 날짜(selectedDay)를 기반으로 새로운 날짜를 계산
          .subtract(1, 'month') //1달 전으로 이동
          .endOf('month') //해당 월의 마지막 날짜를 얻
          .format('YYYY-MM-DD'); //날짜를 'YYYY-MM-DD' 형식의 문자열로 변환
        setSelectedDay(newDate); //선택된 날짜를 새로 계산된 날짜로 업데이트
      };
    //이 함수는 다음 달로 이동하는 동작을 처리
      const handleNextMonth = () => {
        const newDate = dayjs(selectedDay)
          .add(1, 'month') //1달 후로 이동
          .startOf('month') // 해당 월의 첫 번째 날짜를 얻음
          .format('YYYY-MM-DD');
        setSelectedDay(newDate);
      };

    return (
        <c.CalendarWrapper>
        <c.Header>
            <GoChevronLeft style={{width: '1.3rem', height: '1.3rem', cursor: 'pointer'}} onClick={handlePrevMonth}/>
            <p className='yearandmonth'>{dayjs(selectedDay).year()}년 {dayjs(selectedDay).month()+1}월</p>
            <GoChevronRight style={{width: '1.3rem', height: '1.3rem', cursor: 'pointer'}} onClick={handleNextMonth}/>
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
                    <c.DateContainer>
                    <li className={selectedDay === v ? 'selected' : 'not-selected'} onClick={()=> setSelectedDay(v)}>{dayjs(v).date()}</li>
                    {/* <BsCircle className={selectedDay === v ? 'checkbox-selected' : 'checkbox-notselected'}>{todoCount}</BsCircle> */}
                    {/* <DataCount v={v}/> */}
                    </c.DateContainer>
                )}
                </div>
            ))}
            </c.CalendarBoard>
        </c.CalendarWrapper>
    )
}

export default CalendarBoard