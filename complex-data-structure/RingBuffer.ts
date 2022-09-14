
/**
 * Function signature for checking equality
 */
export interface EqualsFunction<T> {
  (a: T, b: T): boolean
}

/**
 * Function signature for comparing
 * > 0 => a is larger than b
 * = 0 => a equals b
 * < 0 => a is smaller than b
 */
export interface CompareFunction<T> {
  (a: T, b: T): number
}

/**
 * Default function to test equality.
 * @function
 */
export const defaultEquals = <T>(a: T, b: T): boolean => {
  return a === b
}

export const VALUE_DOES_NOT_EXIST_ERROR = 'Value does not exist.'

/**
 * Default function to compare element order.
 * @function
 */
export function defaultCompare<T>(a: T, b: T): number {
  if (a < b) {
    return -1
  } else if (a === b) {
    return 0
  } else {
    return 1
  }
}



class CircularBuffer<T> {
  private list: T[]
  private sz: number
  private capacity: number

  private readIndex: number
  private writeIndex: number

  private equalsF: EqualsFunction<T>

  constructor(capacity: number, equalsFunction?: EqualsFunction<T>) {
    this.list = new Array(capacity)
    this.sz = 0
    this.capacity = capacity

    this.readIndex = 0
    this.writeIndex = 0

    this.equalsF = equalsFunction || defaultEquals
  }

  /*****************************************************************************
                                  INSPECTION
  *****************************************************************************/
  /**
   * Returns size of circular buffer - O(1)
   */
  size(): number {
    return this.sz
  }

  /**
   * Returns true if buffer is empty, false otherwise - O(1)
   */
  isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * Deletes all elements in buffer - O(capacity)
   */
  clear(): void {
    this.list = new Array(this.capacity)
    this.sz = 0
  }

  /*****************************************************************************
                                  INSERTION/DELETION
  *****************************************************************************/
  /**
   * Enqueues element into queue - O(1)
   * @param {T} element - element to be enqueued
   */
  enqueue(element: T): void {
    this.list[this.writeIndex] = element

    const elementIsOverWritten = this.sz !== 0 && this.writeIndex === this.readIndex
    if (elementIsOverWritten) {
      this.readIndex = (this.readIndex + 1) % this.capacity
    }

    this.writeIndex = (this.writeIndex + 1) % this.capacity

    this.sz += 1
  }

  /**
   * Dequeues element from queue - O(1)
   * @returns {T}
   */
  dequeue(): T | null {
    if (this.isEmpty()) return null

    const removedVal = this.list[this.readIndex]
    this.readIndex = (this.readIndex + 1) % this.capacity

    this.sz -= 1

    return removedVal
  }

  /*****************************************************************************
                                  ACCESSING
  *****************************************************************************/
  /**
   * Peeks the element at the front of the buffer - O(1)
   * @returns {T} - Frontmost element
   */
  peekFront(): T | null {
    if (this.isEmpty()) return null

    return this.list[this.readIndex]
  }

  /**
   * Peeks the element at the back of the buffer - O(1)
   * @returns {T} - Backmost element
   */
  peekBack(): T | null {
    if (this.isEmpty()) return null

    let i = this.writeIndex - 1
    if (i < 0) i = this.capacity - 1

    return this.list[i]
  }

  /*****************************************************************************
                                  SEARCHING
  *****************************************************************************/
  /**
   * Checks if element is in buffer - O(n)
   * @param {T} element  - element to search for
   * @returns {boolean}
   */
  contains(element: T): boolean {
    return this.list.some((val: T) => {
      return this.equalsF(val, element)
    })
  }
}

export default CircularBuffer