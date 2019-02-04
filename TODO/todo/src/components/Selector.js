import FilterLink from '../containers/FilterLink'
import {visibilityFilters} from '../actions/index'
import  React  from 'react';

const Selector = () => (
    <div>
        <span>Sow: </span>
        <FilterLink filter={visibilityFilters.SHOW_ALL}> 
            All
        </FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_ACTIVE}> 
            Active
        </FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_COMPLETED}> 
            Completed
        </FilterLink>
    </div>
)

export default Selector
