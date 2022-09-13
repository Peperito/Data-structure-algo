/* A prioritty queue is an abstract Data Type that operates similar to a normal queue
Except that each element has a priority. The priority determine in which orders elements are removed.
Only supports comparable data.

To do that, a priority queue uses a heap, a heap is a tree based DS that satisfies the heap invariant, (also called heap property):
If A is a parent node of B then A is ordered with respect to B for all nodes A, B in the heap.

Complexity PQ with binary heap:
    - Binary heap construction -> O(n)
    - Polling -> O(log(n))
    - Peeking -> O(1)
    - Adding -> O(log(n))
    - naive removing -> O(n)
    . Removing with help from hash table -> O(log(n))
    - Naive contains -> O(n)
    - contains with help of hash table -> O(1)

Turning a min PQ into a max PQ?
Negating the values or transforming the comparators

*/
