import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  NotAllowedIcon,
  TimeIcon,
} from '@chakra-ui/icons';
import {
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/react';
import { addMinutes, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { timeFormat, timeToDate } from '../../../common/dateConfig';
import style from './List.module.css';

// small shorthand for adding delay and formatting date
const addAndFormat = (time, delay) => {
  return format(addMinutes(time, delay), timeFormat);
};

export default function EventListItem(props) {
  const [more, setMore] = useState(false);
  const [armed, setArmed] = useState(false);
  // const [timeStart, setTimeStart] = useState(
  //   addAndFormat(props.data.timeStart, props.delay)
  // );
  const [timeStart, setTimeStart] = useState(0);
  const [timeEnd, setTimeEnd] = useState(
    addAndFormat(props.data.timeEnd, props.delay)
  );

  const { data, selected, delay, ...rest } = props;

  // prepare time fields
  useEffect(() => {
    setTimeStart(addAndFormat(props.data.timeStart, props.delay));
    setTimeEnd(addAndFormat(props.data.timeEnd, props.delay));
  }, [props.data, props.delay]);

  const updateValues = (field, value) => {
    // validate field
    if (field in data) {
      // create object with new field
      const newData = { ...data, [field]: value };

      // request update in parent
      props.updateData(props.index, newData);
    } else {
      console.log('field error', field);
    }
  };

  return (
    <form>
      <div className={selected ? style.eventRowActive : style.eventRow}>
        <div
          className={armed ? style.armActive : style.arm}
          onClick={() => setArmed(!armed)}
        />
        <div className={style.time}>
          <Editable
            onSubmit={(v) => updateValues('timeStart', timeToDate(v))}
            value={timeStart}
            onChange={(val) => setTimeStart(val)}
            placeholder='--:--'
            style={{ textAlign: 'center' }}
            className={delay > 0 && style.delayedEditable}
          >
            <EditablePreview />
            <EditableInput type='time' min='00:00' max='23:59' />
          </Editable>
        </div>
        <div className={style.time}>
          <Editable
            onSubmit={(v) => updateValues('timeEnd', timeToDate(v))}
            value={timeEnd}
            onChange={(val) => setTimeEnd(val)}
            placeholder='--:--'
            style={{ textAlign: 'center' }}
            className={delay > 0 && style.delayedEditable}
          >
            <EditablePreview />
            <EditableInput type='time' min='00:00' max='23:59' />
          </Editable>
        </div>
        <div className={style.rowDetailed}>
          {more ? (
            <div className={style.detailedContainer}>
              <div style={{ display: 'block' }}>
                <span className={style.detailedTitleUnderlined}>Title</span>
                <Editable
                  onSubmit={(v) => updateValues('title', v)}
                  defaultValue={data.title}
                  placeholder='Add title'
                  style={{ display: 'inline' }}
                >
                  <EditablePreview />
                  <EditableInput style={{ width: '13em' }} />
                </Editable>
              </div>
              <div style={{ display: 'block' }}>
                <span className={style.detailedTitleUnderlined}>Subtitle</span>
                <Editable
                  onSubmit={(v) => updateValues('subtitle', v)}
                  defaultValue={data.subtitle}
                  placeholder='Add subtitle'
                  style={{ display: 'inline' }}
                >
                  <EditablePreview />
                  <EditableInput style={{ width: '13em', minWidth: '13em' }} />
                </Editable>
              </div>
              <div style={{ display: 'block' }}>
                <span className={style.detailedTitleUnderlined}>Presenter</span>
                <Editable
                  onSubmit={(v) => updateValues('presenter', v)}
                  defaultValue={data.presenter}
                  placeholder='Add presenter name'
                  style={{ display: 'inline' }}
                >
                  <EditablePreview style={{}} />
                  <EditableInput style={{ width: '13em' }} />
                </Editable>
              </div>
            </div>
          ) : (
            <div className={style.titleContainer}>
              <div>
                <span className={style.detailedTitle}>Title</span>
                <Editable
                  onSubmit={(v) => updateValues('title', v)}
                  defaultValue={data.title}
                  placeholder='Add title'
                  style={{ display: 'inline' }}
                  id='title'
                >
                  <EditablePreview />
                  <EditableInput style={{ width: '13em' }} />
                </Editable>
              </div>
            </div>
          )}
          <div className={style.more} onClick={() => setMore(!more)}>
            {more ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
        <div className={style.actionOverlay}>
          <IconButton
            size='xs'
            icon={<MinusIcon />}
            colorScheme='red'
            onClick={() => props.deleteEvent(props.index)}
          />
          <IconButton
            size='xs'
            icon={<AddIcon />}
            colorScheme='blue'
            onClick={() => props.createEvent(props.index)}
          />
          <IconButton
            size='xs'
            icon={<TimeIcon />}
            colorScheme='yellow'
            onClick={() => props.createDelay(props.index)}
          />
          <IconButton
            size='xs'
            icon={<NotAllowedIcon />}
            colorScheme='purple'
            onClick={() => props.createBlock(props.index)}
          />
        </div>
      </div>
    </form>
  );
}
