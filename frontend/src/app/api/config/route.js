import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
      const filePath = path.join(__dirname, '../config.txt');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return NextResponse.status(500).json({ error: 'Error reading the file' });
        }
        return NextResponse.json({ content: data });
      }); } catch (error) {
      console.error('Error fetching config:', error);

      return NextResponse.status(500).json({ error: 'Error fetching config' });

  }   }