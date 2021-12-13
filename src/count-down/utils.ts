import { TimeData } from './type';

/**
 * getRemainTimes
 * @param time
 * @returns
 */
export const getRemainTimes = (time?: number): TimeData => {
  if (!time) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };
  }
  const stime = Math.floor(time / 1000); // 秒
  return {
    days: Math.floor(stime / 3600 / 24),
    hours: Math.floor((stime / 3600) % 24),
    minutes: Math.floor((stime / 60) % 60),
    seconds: Math.floor(stime % 60),
    milliseconds: Math.floor(time % 1000),
  };
};

/**
 * fillZero
 * @param num
 * @returns
 */
export const fillZero = (num: number): string | number => (num >= 10 ? num : `0${num}`);

/**
 * getMark
 * @param format
 * @param type
 * @returns
 */
export const getMark = (format: string, type: string): string => format?.split?.(type)?.[1]?.split?.('')?.[0];

/**
 * getShowTimes
 * @param time
 * @returns
 */
type IShowTimes = Array<{ mark?: string; value?: string | number }>;
export const getShowTimes = (times: TimeData, format: string): IShowTimes => {
  format = (format || 'DD:HH:mm:ss')?.toUpperCase?.();
  const showTimes: IShowTimes = [];
  if (format?.indexOf('DD') > -1) {
    showTimes?.push({
      mark: getMark(format, 'DD'),
      value: fillZero(times?.days),
    });
  }
  if (format?.indexOf('HH') > -1) {
    showTimes?.push({
      mark: getMark(format, 'HH'),
      value: fillZero(times?.hours),
    });
  }
  if (format?.indexOf('MM') > -1) {
    showTimes?.push({
      mark: getMark(format, 'MM'),
      value: fillZero(times?.minutes),
    });
  }
  if (format?.indexOf('SS') > -1) {
    showTimes?.push({
      mark: getMark(format, 'SS'),
      value: fillZero(times?.seconds),
    });
  }
  if (format?.indexOf('SSS') > -1) {
    showTimes?.push({
      mark: getMark(format, 'SSS'),
      value: fillZero(times?.milliseconds),
    });
  }

  return showTimes;
};
