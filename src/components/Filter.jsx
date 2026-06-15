import './styles/filter.scss'

function Filter({ selectedCategory, onCategoryChange }) {
    return (
        <div className="projects-filter">
            <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => onCategoryChange('all')}><span>All</span> </button><span>{" • "}</span>
            <button className={selectedCategory === 'frontend' ? 'active' : ''} onClick={() => onCategoryChange('frontend')}><span>Frontend</span></button><span>{" • "}</span>
            <button className={selectedCategory === 'backend' ? 'active' : ''} onClick={() => onCategoryChange('backend')}><span>Backend</span> <span>{" "}</span></button>
        </div>
    );
}

export default Filter;