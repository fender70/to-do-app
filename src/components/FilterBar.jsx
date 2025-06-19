function FilterBar({ current, onChange}) {
    const filters = ["All", "Todo", "In Progress", "Done"];

    return (
        <div>
            {filters.map(f => (
                <button
                    key={f}
                    onClick={() => onChange(f)}
                    style={{
                        fontWeight: current === f ? "bold" : "normal",
                        marginRight: "8px"
                    }}
                >
                    {f}
                </button>
            ))}
        </div>
    )
}

export default FilterBar