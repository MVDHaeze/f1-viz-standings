export async function getDriverStanding() {
  const YEAR = 2022;
  const ROUND = 1;

  try {
    const response = await fetch(
      `http://ergast.com/api/f1/${YEAR}/${ROUND}/driverStandings`
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
