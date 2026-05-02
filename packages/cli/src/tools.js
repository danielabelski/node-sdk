import { tools } from '@chatbotkit/agent'

import { InvalidArgumentError } from 'commander'

export { tools }

/**
 * Get specific tools based on selected tool names
 *
 * @param {Array<keyof typeof tools>} [selectedTools] - Array of tool names to include. If not provided, returns only default tools
 * @returns {typeof tools}
 */
export function getTools(selectedTools) {
  if (!selectedTools || selectedTools.length === 0) {
    return Object.fromEntries(
      Object.entries(tools).filter(([, tool]) => tool.default)
    )
  }

  return Object.fromEntries(
    Object.entries(tools).filter(([name]) => selectedTools.includes(name))
  )
}

/**
 * Parse a tool selection option, supporting comma-separated and variadic forms.
 *
 * @param {string} value
 * @param {Array<keyof typeof tools>} [previous]
 * @returns {Array<keyof typeof tools>}
 */
export function parseSelectedTools(value, previous = []) {
  const selectedTools = value
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)

  const availableToolNames = new Set(getToolNames())
  const invalidTools = selectedTools.filter(
    (toolName) => !availableToolNames.has(toolName)
  )

  if (invalidTools.length > 0) {
    throw new InvalidArgumentError(
      `Unknown tool names: ${invalidTools.join(', ')}`
    )
  }

  return [...previous, ...selectedTools]
}

/**
 * Get available tool names
 *
 * @returns {Array<keyof typeof tools>}
 */
export function getToolNames() {
  return Object.keys(tools)
}
