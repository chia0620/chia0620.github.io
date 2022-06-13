const useIcon = () => {
  const requireAll = requireContext => requireContext.keys().map(requireContext)

  const reqCurrentProject = require.context('@/assets/icons', false, /\.svg$/)

  requireAll(reqCurrentProject)
}

export {
  useIcon
}
