export interface AppProviderInterface {
  state: { direction: string }
  changeDirection: (dir: string) => void
}
